import { base_url } from "../utils/constans.js";

export async function planetLoader() {
    try {
        const response = await fetch(`${base_url}/v1/planets`);
        const data = await response.json();
        if (data && data.results) {
            return data.results;
        } else {
            console.error('Failed to fetch planets:', data.error);
            return [];
        }
    } catch (error) {
        console.error('Error fetching planets:', error);
        return [];
    }
}