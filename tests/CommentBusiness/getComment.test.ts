import { PostBusiness } from "../../src/business/PostBusiness"
import { CreatePostDTO, GetCommentInputDTO, GetPostInputDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { CommentBusiness } from "../../src/business/CommentBusiness"
import { CommentDataBaseMock } from "../mocks/CommentDataBaseMock"



describe("getComment", () => {
    const commentBusiness = new CommentBusiness(
        new CommentDataBaseMock(),
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )


    test("Retorna posts", async () => {
        const input : GetCommentInputDTO =  {
            token: "token-mock-normal",
        }

        const response = await commentBusiness.getComment(input)
        expect(response.Comment).toEqual(
           [ {
                id: "id-mock",
                user_id: "id-mock",
                post_id:"id-mock",
                likes: 0,
                dislikes: 0,
                comment: "exemplo"  
            }]
        )
    })
    })