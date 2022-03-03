import { BASE_API } from "../utils/constants";

export async function getOrdersByTableApi(idTable, status = "", ordering = "") {
    try {
        const url = `${BASE_API}/api/orders/?`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}