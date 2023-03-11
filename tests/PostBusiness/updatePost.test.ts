import { PostBusiness } from "../../src/business/PostBusiness"
import { CreatePostDTO, EditPostInputDTO, GetPostInputDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"



describe("upadatePost", () => {
    const postBusiness = new PostBusiness(
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )
        


    test("updatePost", async () => {
        const input : EditPostInputDTO =  {
            idParams:"id-mock",
            content: "exemplo",
            token: "token-mock-normal"
        }

        const response = await postBusiness.updatePost(input)
        expect(response).toBeUndefined()
    })
    })