import { BaseDatabase } from "../../src/database/BaseDataBase"
import { LikeorDislikeDB, TPosts, USER_ROLES } from "../../src/models/types"

export class PostDataBaseMock extends BaseDatabase {
    public static TABLE_POSTS = "posts"
    public static TABLE_LIKES_DISLIKES = "likes_dislikes"

    public findGetPostId = async (id: string): Promise<TPosts | undefined> => {
        switch (id) {
            case "id-mock":
                return {
                    id: "id-mock",
                    creator_id: "id-mock",
                    content: "testando",
                    likes: 0,
                    dislikes: 0,
                    comments: 0,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }
            default:
                return undefined
        }
    }

    public insertPost = async (newProduct: TPosts): Promise<void> => {
        // não precisa retornar nada, porque é void
    }


    public findGetPost = async () => {
        return [
            {
                id: "id-mock",
                content: "testando",
                likes: 0,
                dislikes: 0,
                comments: 0,
                updated_at: new Date().toISOString(),
                created_at: new Date().toISOString(),
                creator_id: "id-mock",

            }]
    }


    public findPostId = async (idParams: string): Promise<TPosts | undefined> => {
        switch (idParams) {
            case "id-mock":
                return {
                    id: "id-mock",
                    content: "testando",
                    likes: 0,
                    dislikes: 0,
                    comments: 0,
                    updated_at: new Date().toISOString(),
                    created_at: new Date().toISOString(),
                    creator_id: "id-mock",
                }
            default:
                return undefined
        }
    }



    public findUpdatePost = async (updatePost: TPosts, id: string): Promise<void> => {

    }



    public deletePostId = async (deletePost: string): Promise<void> => {

    }


    public likeOrDislikePost = async (likeDislike: LikeorDislikeDB): Promise<void> => {

    }

    public findPostLikeOrDislike = async (postId: string): Promise<TPosts | undefined> => {
        return {
            id: "id-mock",
            creator_id: "id-mock",
            content: "exemplo",
            likes: 0,
            dislikes: 0,
            comments: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        }
    }

    public findLikeDislike = async (likeDislike: LikeorDislikeDB): Promise<"já foi curtido"
        | "já foi descurtido" | null> => {
        const [likesDislikeFind]: LikeorDislikeDB[] = await BaseDatabase
            .conection(PostDataBaseMock.TABLE_LIKES_DISLIKES)
            .select()
            .where({
                user_id: likeDislike.user_id,
                post_id: likeDislike.post_id
            })

        if (likesDislikeFind) {
            return likesDislikeFind.like === 1 ? "já foi curtido" : "já foi descurtido"
        } else {
            return null
        }
    }

    public removeLikeDislike = async (likeDislike: LikeorDislikeDB): Promise<void> => {
        await BaseDatabase.conection(PostDataBaseMock.TABLE_LIKES_DISLIKES)
            .delete()
            .where({
                user_id: likeDislike.user_id,
                post_id: likeDislike.post_id
            })
    }

    public updateLikeDislike = async (likeDislike: LikeorDislikeDB): Promise<void> => {
        await BaseDatabase.conection(PostDataBaseMock.TABLE_LIKES_DISLIKES)
            .update(likeDislike)
            .where({
                user_id: likeDislike.user_id,
                post_id: likeDislike.post_id
            })
    }


}
