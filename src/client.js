import { createClient } from '@sanity/client';

const client = createClient({
    projectId: "wo0teh2e",
    dataset: "production",
    useCdn:true,
    apiVersion:"2023-10-01"
})

export default client