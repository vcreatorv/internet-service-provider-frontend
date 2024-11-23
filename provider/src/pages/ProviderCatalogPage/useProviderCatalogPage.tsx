import { useEffect, useState } from "react";
import { IProviderService } from "../../core/api/service/typing";
// import { getProviderServiceList } from "../../core/api/service";
import { ProviderServiceList as PROVIDER_SERVICE_LIST_MOCK } from "../../core/mock/porivderServicesList";
import { ChangeEvent } from "../../App.typing";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { setSearchTitle, setTariffType } from "../../core/store/slices/providerServiceSlice";
import { api } from "../../core/api";
import axios from "axios";
import { logoutUser } from "../../core/store/slices/userAuthSlice";


export const useProviderCatalogPage = () => {
    const dispatch = useAppDispatch();
    const { searchTitle, tariffType } = useAppSelector((state) => state.providerService);
    const { isAuth, accessToken } = useAppSelector((state) => state.userAuth);
    const [providerServiceList, setProviderServiceList] = useState<IProviderService[]>([]);
    const [connectionRequestId, setConnectionRequestId] = useState<number>(0);
    const [itemsInCart, setItemsInCart] = useState<number>(0);

    const fetchProviderServices = async (title?: string, monthlyPayment?: boolean | null) => {
        try {
            const response = await api.getAllProviderDuties({
                title,
                monthlyPayment: monthlyPayment === null ? undefined : monthlyPayment
            });
            
            if (response.data && typeof response.data === 'object') {
                const data = response.data as Record<string, any>;
                setProviderServiceList(data.providerServiceList || []);
                setConnectionRequestId(data.connectionRequestId || -1);
                setItemsInCart(data.itemsInCart || 0);
            }
        } catch (error) {          
            console.error("Ошибка получения списка услуг с бэкенда:", error);
            let filteredProviderService = PROVIDER_SERVICE_LIST_MOCK;
            if (title && title !== undefined) {
                filteredProviderService = filteredProviderService.filter((providerService) =>
                    providerService.title.toLowerCase().includes(title.toLowerCase())
                );
            }
            if (monthlyPayment !== null && monthlyPayment !== undefined) {
                filteredProviderService = filteredProviderService.filter((providerService) =>
                    providerService.monthlyPayment === monthlyPayment
                );
            }
            setProviderServiceList(filteredProviderService);
            setConnectionRequestId(0);
            setItemsInCart(0);
        }
    };


    const handleSearchProviderServiceClick = () => {
        fetchProviderServices(searchTitle, tariffType);
    };

    const handleSearchTitleChange = (e: ChangeEvent) => {
        dispatch(setSearchTitle(e.target.value));
    };

    const handleTariffTypeChange = (eventKey: string | null) => {
        const newTariffType = eventKey === "all" ? null : eventKey === "true";
        dispatch(setTariffType(newTariffType));
        fetchProviderServices(searchTitle, newTariffType);
    };

    useEffect(() => {
        fetchProviderServices(searchTitle, tariffType);
    }, [accessToken, searchTitle, tariffType]);

    return {
        providerServiceList,
        connectionRequestId,
        itemsInCart,
        handleSearchProviderServiceClick,
        handleSearchTitleChange,
        handleTariffTypeChange,
        searchTitle,
        tariffType,
    };
};