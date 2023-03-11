import { PostBusiness } from "../../src/business/PostBusiness"
import { CreatePostDTO, DeletePostInputDTO, GetPostInputDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"



describe("deletePost", () => {
    const postBusiness = new PostBusiness(
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )


    test("Retorna posts", async () => {
        const input : DeletePostInputDTO =  {
            id: "id-mock",
            token: "token-mock-normal",
        }

        const response = await postBusiness.deletePost(input)
        expect(response).toBeUndefined()
    })
    })