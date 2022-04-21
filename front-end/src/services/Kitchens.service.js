export const getKitchens = async () => {
    const response = await fetch(`http://localhost:3001/kitchens`);
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const getKitchenById = async (kitchenId) => {
    const response = await fetch(`http://localhost:3001/kitchens/${kitchenId}?_embed=inscriptions`);
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}