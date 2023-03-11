import { PostBusiness } from "../../src/business/PostBusiness"
import { CreatePostDTO, GetPostInputDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"



describe("getPost", () => {
    const postBusiness = new PostBusiness(
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )


    test("Retorna posts", async () => {
        const input : GetPostInputDTO =  {
            token: "token-mock-normal",
        }

        const response = await postBusiness.getPost(input)

        
        expect(response.Post).toEqual(
           [
            {
                id: "id-mock",
                content: "testando",
                likes:0,
                dislikes:0,
                Comments:0,
                created_at: expect.any(String),
                updated_at: expect.any(String),
                creator: {id: undefined,
            name: undefined}
            }]
        )
    })
    })