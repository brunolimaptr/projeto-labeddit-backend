import { UserBusiness } from "../../src/business/UserBusiness"
import { SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDataBaseMock"

describe("createUsers", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("cadastro bem-sucedido retorna token", async () => {
        const input:  SignupInputDTO = {
            nick_name: "Example Mock",
            email: "example@email.com",
            password: "hash-password"
        }

        const response = await userBusiness.createUsers(input)
        expect(response.token).toBe("token-mock-normal")
    })
})