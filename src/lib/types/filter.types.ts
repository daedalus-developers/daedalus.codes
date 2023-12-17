// Define base filter
export type PaginatedFilter = {
	page?: number;
	perPage?: number;
	sort?: string; // must be updated, created or any of the fields avaialble to the entity
};

// Create filter per entity special fields
