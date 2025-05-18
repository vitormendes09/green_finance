export interface Ilogin{
    login(email: string, password: string): Promise<string>
}