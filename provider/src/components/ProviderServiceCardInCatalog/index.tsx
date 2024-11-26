import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import unknownImage from "/images/image_placeholder.jpg"
import { ProviderDuty } from "../../core/api/API";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { addToConnectionRequest, initializeConnectionRequest } from "../../core/store/slices/cartSlice";
import { FC } from "react";
import { api } from "../../core/api";
import { incrementServicesInConnectionRequest, setConnectionRequestData } from "../../core/store/slices/appSlice";


export const ProviderServiceCard: FC<ProviderDuty> = (providerService) => {
    const dispatch = useAppDispatch();
    const {id, services} = useAppSelector((state) => state.cart);
      
    const renderPrice = () => {
      if (providerService.monthlyPayment) {
        return `от ${providerService.price} ₽/мес`;
      } 
      else {
        return `от ${providerService.price} ₽ за ${providerService.unit}`;
      }
    };
    
    const handleAddToConnectionRequest = async () => {
      
      if (services.find(service => service.id === providerService.id) && id != 0) {
        console.log("Услуга уже добавлена в заявку");
        return;
      }
      
      try {
        const response = await api.addProviderDutyToRequest(providerService.id!);
        
        if (id === 0) {
          dispatch(initializeConnectionRequest({
            id: response.data.id,
            providerServiceList: [],
            consumer: '',
            phoneNumber: ''
          }));
          dispatch(setConnectionRequestData({connectionRequestId: response.data.id!}))
        }

        dispatch(addToConnectionRequest(providerService));
        dispatch(incrementServicesInConnectionRequest());
      
        if (response.data) {
          console.log("Услуга успешно добавлена в заявку");
        }
      } 
      catch (error) {
        console.error('Ошибка добавления услуги в заявку:', error);
      }
    };
        
    return (
      <Card className="w-100 rounded-4 shadow-sm" style={{ overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={providerService.imgUrl ? (providerService.imgUrl) : (unknownImage)}
          style={{ 
            width: '100%', 
            maxHeight: '280px', 
            objectFit: 'cover'
          }}   
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{providerService.title}</Card.Title>
          <Card.Text className="fw-medium fs-5">{renderPrice()}</Card.Text>
          <div className="mt-auto d-flex flex-column flex-md-row justify-content-between gap-2">
            <Button 
              variant="warning" 
              className="w-100 btn-lg"
              style={{ 
                transition: "transform 550ms", 
                backgroundColor: "#fed305", 
                borderColor: "#fed305", 
                fontWeight: "500", 
                color: "#373737"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              onClick={handleAddToConnectionRequest}
            >
              Добавить
            </Button>
            
            <Link 
              className="btn btn-secondary w-100 btn-lg"
              style={{ 
                transition: "transform 550ms", 
                backgroundColor: "#adadad", 
                borderColor: "#adadad", 
                fontWeight: "500", 
                color: "#373737"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              to={'/provider-duties/' + providerService.id}
            >
              Подробнее
            </Link>
          </div>
        </Card.Body>
      </Card>
    );
  }