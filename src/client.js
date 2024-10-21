import client from "@sanity/client"

export default client({
    projectId: "wo0teh2e",
    dataset: "production",
    useCdn:true,
})