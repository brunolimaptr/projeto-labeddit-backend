import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDataBaseMock"

describe("createUsersLogin", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Login bem-sucedido retorna token", async () => {
        const input:  LoginInputDTO = {
            email: "usuario@email.com",
            password: "password"
        }

        const response = await userBusiness.createUsersLogin(input)
        expect(response.token).toBe("token-mock-normal")
        
    })

    
})