export interface Materials {
    id?: number,
    material_icon: string,
    material_name: string,
    material_amount: number;
    profile_id: number; // Add this line
    material_count?: number; // Add this line
}
