import { TokenPayload, USER_ROLES } from "../../src/models/types"



export class TokenManagerMock {

    public createToken = (payload: TokenPayload): string => {
        if (payload.role == USER_ROLES.USUARIO) {
            return "token-mock-normal"
        } else {
            return "token-mock-admin"
        }
    }

    public getPayload = (token: string): TokenPayload | null => {
        if (token == "token-mock-normal") {
            return {
                id: "id-mock",
                nick_name: "name-mock",
                role: USER_ROLES.USUARIO
            }
            
        } else if (token == "token-mock-admin") {
            return {
                id: "id-mock",
                nick_name: "name-mock",
                role: USER_ROLES.ADMIN
            }

        } else {
            return null
        }
    }
}