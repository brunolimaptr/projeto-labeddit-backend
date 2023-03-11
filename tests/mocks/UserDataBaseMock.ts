import { BaseDatabase } from "../../src/database/BaseDataBase"
import { TUser, USER_ROLES } from "../../src/models/types"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "users"

    public insertPostUser = async (TUser: TUser): Promise<void> => {
        // não precisa retornar nada, porque é void
    }

    public findPostUserEmail = async (email: string): Promise<TUser | undefined>  => {
        switch (email) {
            case "usuario@email.com":
                return {
                    id: "id-mock",
                    nick_name: "usuario Mock",
                    email: "usuario@email.com",
                    password: "hash-password",
                    created_at: new Date().toISOString(),
                    role: USER_ROLES.USUARIO
                }
            case "admin@email.com":
                return {
                    id: "id-mock",
                    nick_name: "Admin Mock",
                    email: "admin@email.com",
                    password: "hash-password",
                    created_at: new Date().toISOString(),
                    role: USER_ROLES.ADMIN
                }
            default:
                return undefined
        }
    }

    public findPostUser = async (id: string): Promise<TUser | undefined>  => {
        switch (id) {
            case "id-mock":
                return {
                    id: "id-mock",
                    nick_name: "usuario Mock",
                    email: "usuario@email.com",
                    password: "hash-password",
                    created_at: new Date().toISOString(),
                    role: USER_ROLES.USUARIO
                }
            default:
                return undefined
        }
    }


    public findPostUserPassword = async (password: string): Promise<TUser | undefined>  => {
        switch (password) {
            case "password":
                return {
                    id: "id-mock",
                    nick_name: "usuario Mock",
                    email: "usuario@email.com",
                    password: "hash-password",
                    created_at: new Date().toISOString(),
                    role: USER_ROLES.USUARIO
                }
            default:
                return undefined
        }
    }



    public findGetUsers = async (): Promise<TUser[]>  => {
        return [
            {
                id: "id-mock",
                nick_name: "usuario Mock",
                email: "usuario@email.com",
                password: "hash-password",
                role: USER_ROLES.USUARIO,
                created_at: new Date().toISOString(),
            },
            {
                id: "id-mock2",
                nick_name: "Admin Mock",
                email: "admin@email.com",
                password: "hash-password",
                role: USER_ROLES.ADMIN,
                created_at: new Date().toISOString(),
            }
        ]
    }

    
}