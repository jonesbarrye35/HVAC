export * from './database.types';

export type JobStatus = 'scheduled' | 'en_route' | 'on_site' | 'completed' | 'invoiced';
export type UserRole = 'owner' | 'technician';
