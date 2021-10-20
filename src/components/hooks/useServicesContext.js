import { useContext } from "react"
import { servicesContext } from './../../context/ServicesProvider'

const useServicesContext = () => {
    return useContext(servicesContext);
}

export default useServicesContext;