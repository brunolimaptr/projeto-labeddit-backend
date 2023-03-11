import { PostBusiness } from "../../src/business/PostBusiness"
import { CreatePostDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"



describe("createPost", () => {
    const postBusiness = new PostBusiness(
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )


    test("Post criado retorna token", async () => {
        const input : CreatePostDTO =  {
            token: "token-mock-normal",
            content: "exemplo"
        }

        const response = await postBusiness.createPost(input)
        expect(response).toBeUndefined()
    })
    })
