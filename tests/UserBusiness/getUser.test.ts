import { UserBusiness } from "../../src/business/UserBusiness"
import { USER_ROLES } from "../../src/models/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDataBaseMock"

describe("getAll", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve retornar uma lista de Users", async () => {
        const response = await userBusiness.getUsers()
       
        expect(response.users).toEqual(
            [
                {
                    id: "id-mock",
                    nickName: "usuario Mock",
                    email: "usuario@email.com",
                    password: "hash-password",
                    role: USER_ROLES.USUARIO,
                    createdAt: expect.any(String)
                },
                {
                    id: "id-mock2",
                    nickName: "Admin Mock",
                    email: "admin@email.com",
                    password: "hash-password",
                    role: USER_ROLES.ADMIN,
                    createdAt: expect.any(String)
                }
            ]
        )
        
    })
})