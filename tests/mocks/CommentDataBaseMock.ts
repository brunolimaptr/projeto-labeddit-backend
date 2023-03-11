import { BaseDatabase } from "../../src/database/BaseDataBase"
import { CommentDB, CommentWithCreatorDB, LikeorDislikeDB } from "../../src/models/types"

export class CommentDataBaseMock extends BaseDatabase {
    public static TABLE_POSTS = "posts"
    public static TABLE_LIKES_DISLIKES = "likes_dislikes"
    public static TABLE_COMMENTS = "comments"
    public static TABLE_LIKES_DISLIKES_COMMENTS = "likes_dislikes_comments"

    public findGetCommentId = async (id: string): Promise<CommentDB | undefined>  => {
        switch (id) {
            case "usuario@email.com":
                return {
                     id: "id-mock",
                     user_id: "id-mock",
                     post_id: "id-mock",
                     likes: 0,
                     dislikes: 0,
                     comment: "exemplo"
                }
            default:
                return undefined
        }
    }

    public insertComment = async (newProduct: CommentDB):Promise<void>=>{
         // não precisa retornar nada, porque é void
    }


    public findGetComment = async ()=>{
       return[
       {
        id: "id-mock",
        user_id: "id-mock",
        post_id: "id-mock",
        likes: 0,
        dislikes: 0,
        comment: "exemplo"
    }]
    }


    public findCommentId = async (idParams: string):Promise<CommentDB | undefined>=>{
        switch (idParams) {
            case "id-mock":
                return {
                    id: "id-mock",
                    user_id: "id-mock",
                    post_id: "id-mock",
                    likes: 0,
                    dislikes: 0,
                    comment: "exemplo"
                }
            default:
                return undefined
        }
    }
    


    public findUpdateComment = async (updatePost: CommentDB, id: string):Promise<void>=>{
       
    }
    


    public  deleteCommentId = async( deletePost: string):Promise<void>=>{
        
    }


    public likeOrDislikeComment = async (likeDislike: LikeorDislikeDB): Promise<void> => {
        
    }

    public findCommentLikeOrDislike = async (postId: string): Promise<CommentWithCreatorDB | undefined> => {
       return {
        id: "id-mock",
        user_id: "id-mock",
        post_id: "id-mock",
        likes: 0,
        dislikes: 0,
        comment: "exemplo",
        creator_nick_name: "id-mock"
       }
    }

    public findLikeDislike = async (likeDislike: LikeorDislikeDB): Promise<"já foi curtido" 
    | "já foi descurtido" | null> => {
        const [likesDislikeFind] : LikeorDislikeDB[] = await BaseDatabase
        .conection(CommentDataBaseMock.TABLE_LIKES_DISLIKES)
        .select()
        .where({
            user_id: likeDislike.user_id,
            post_id: likeDislike.post_id
        })

        if(likesDislikeFind){
            return likesDislikeFind.like === 1 ? "já foi curtido" : "já foi descurtido"
        }else{
            return null
        }
    }

     public removeLikeDislike = async (likeDislike: LikeorDislikeDB): Promise<void> => {
      
    }

    public updateLikeDislike = async (likeDislike: LikeorDislikeDB): Promise<void> => {
        
       
    }

        
    }
