import { PostBusiness } from "../../src/business/PostBusiness"
import { CreatePostDTO, EditPostInputDTO, GetPostInputDTO, LikeOrDislikeDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"



describe("updatePostId", () => {
    const postBusiness = new PostBusiness(
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )
        


    test("LikeOrDislike", async () => {
        
        const input : LikeOrDislikeDTO =  {
            idLikeOrDislike: "id-mock",
            token: "token-mock-normal",
            like: true
        }

        const response = await postBusiness.updatePostId(input)
        expect(response).toBeUndefined()
    })
    })