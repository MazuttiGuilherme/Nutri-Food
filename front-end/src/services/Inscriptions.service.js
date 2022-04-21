export const createInscription = async (inscriptionData) => {
   const response = await fetch(`http://localhost:3001/inscriptions`, {
                method:'POST',
                body:JSON.stringify(inscriptionData),
                headers: {
                    'content-type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error('Response not ok.')
            }
}