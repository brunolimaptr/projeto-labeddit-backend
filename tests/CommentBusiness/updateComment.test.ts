import { PostBusiness } from "../../src/business/PostBusiness"
import { CreatePostDTO, EditCommentInputDTO, GetCommentInputDTO, GetPostInputDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { CommentBusiness } from "../../src/business/CommentBusiness"
import { CommentDataBaseMock } from "../mocks/CommentDataBaseMock"



describe("updateComment", () => {
    const commentBusiness = new CommentBusiness(
        new CommentDataBaseMock(),
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )
        


    test("updatePost", async () => {
        const input : EditCommentInputDTO =  {
            idParams:"id-mock",
            token: "token-mock-normal",
            comment: "exemplo"
        }
       
        const response = await commentBusiness.updateComment(input)
        expect(response).toBeUndefined()
        
        
    })
    })