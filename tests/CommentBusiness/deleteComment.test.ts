import { PostBusiness } from "../../src/business/PostBusiness"
import { DeleteCommentInputDTO, DeletePostInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { CommentDataBaseMock } from "../mocks/CommentDataBaseMock"
import { CommentBusiness } from "../../src/business/CommentBusiness"



describe("deleteComment", () => {
    const commentBusiness = new CommentBusiness(
        new CommentDataBaseMock(),
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )


    test("Retorna posts", async () => {
        const input : DeleteCommentInputDTO =  {
            id: "id-mock",
            token: "token-mock-normal",
        }

        const response = await commentBusiness.deleteComment(input)
        expect(response).toBeUndefined()
    })
    })