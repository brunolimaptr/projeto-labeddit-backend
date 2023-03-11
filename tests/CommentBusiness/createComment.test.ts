import { CommentBusiness } from "../../src/business/CommentBusiness"
import { CreateCommentDTO, CreatePostDTO, SignupInputDTO } from "../../src/dto/userDTO"
import { USER_ROLES } from "../../src/models/types"
import { PostDataBaseMock } from "../mocks/PostDataBaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { CommentDataBaseMock } from "../mocks/CommentDataBaseMock"
import { PostDataBase } from "../../src/database/PostDataBase"



describe("createPost", () => {
    const commentBusiness = new CommentBusiness(
        new CommentDataBaseMock(),
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
        )


    test("Post criado retorna token", async () => {
        const input : CreateCommentDTO =  {
            token:"token-mock-normal",
            comment: "exemplo",
            idPost: "id-mock"
        }

        const response = await commentBusiness.createComment(input)
        expect(response).toBeUndefined()
    })
    })