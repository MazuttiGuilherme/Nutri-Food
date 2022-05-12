import { apiUrl, getAuthorizationHeaders} from "./Api.service"

export const getKitchens = async () => {
    const response = await fetch(`${apiUrl}/kitchens`);
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const getKitchenById = async (kitchenId) => {
    const response = await fetch(`${apiUrl}/kitchens/${kitchenId}?_embed=inscriptions`);
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const deletekitchen = async kitchenId => {
    const response = await fetch(`${apiUrl}/kitchens/${kitchenId}`, {
        method:'DELETE',
        headers: getAuthorizationHeaders()
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
}