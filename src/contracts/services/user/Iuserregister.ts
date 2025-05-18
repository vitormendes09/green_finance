export interface Iuserregister{ 
    register (name: string, email: string, password: string): Promise<string>;
}