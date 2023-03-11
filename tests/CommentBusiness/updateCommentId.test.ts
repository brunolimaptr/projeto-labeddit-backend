import { PostBusiness } from "../../src/business/PostBusiness"
import { CreatePostDTO, EditCommentInputDTO, GetCommentInputDTO, GetPostInputDTO, LikeOrDislikeCommentDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { CommentBusiness } from "../../src/business/CommentBusiness"
import { CommentDataBaseMock } from "../mocks/CommentDataBaseMock"



describe("updateCommentId", () => {
    const commentBusiness = new CommentBusiness(
        new CommentDataBaseMock(),
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )


    test("LikeOrDislikeComment", async () => {
        const input : LikeOrDislikeCommentDTO =  {
            idLikeOrDislike:"id-mock",
            token: "token-mock-normal",
            like: true
        }

        const response = await commentBusiness.updateCommentId(input)
        expect(response).toBeUndefined()
    })
    })