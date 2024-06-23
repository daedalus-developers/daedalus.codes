export enum Collections {
	Users = 'users',
	UsersDetails = 'users_details',
	Media = 'media', //TODO: Create Media schema in @types
	Events = 'events',
	Projects = 'projects',
	Subscribers = 'subscribers', //TODO: Create Subscribers schema in @types
	Contacts = 'contacts'
}
export * from './auth.types';
export * from './user.types';
export * from './project.types';
export * from './contact.types';
export * from './event.types';
