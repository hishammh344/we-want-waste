import { Skip } from "@/types"
import client from "../api"

export const getSkips = (): Promise<{ data: Array<Skip> }> => {
    return client.get("/skips/by-location?postcode=NR32&area=Lowestoft");
}