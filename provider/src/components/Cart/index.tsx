import { Container } from "react-bootstrap";
import { ICartProps } from "./typing";
import { FC } from "react";

export const Cart: FC<ICartProps> = (cartData: ICartProps) => {
  return (
    <Container className="m-0 mb-5 mt-5 border border-2 shadow-sm rounded p-2 align-self-end"
      style={{ width: "150px", height: "95px", transition: "transform 550ms", backgroundColor: "#ffffff"}}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
      <a href="#" className="d-flex flex-column align-items-center text-dark text-decoration-none fw-medium">
        <img 
          src="/src/bee.png" 
          alt="Bee Icon" 
          className="mb-2" 
          style={{ width: "40px" }}
        />
        <p className="m-0"><small>Выбрано услуг: {cartData.itemsInCart}</small></p>
      </a>
    </Container>
  );
};
