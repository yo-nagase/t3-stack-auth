import { publicProcedure, privateProcedure, router } from "@/trpc/server/trpc"
import { z } from "zod"
import { TRPCError } from "@trpc/server"


export const sampleRouter = router({
  // サインアップ
  test1: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // const { name, email, password } = input

        // // メールアドレスの重複チェック
        // const user = await prisma.user.findUnique({
        //   where: { email },
        // })

        // if (user) {
        //   throw new TRPCError({
        //     code: "BAD_REQUEST",
        //     message: "既に登録されているメールアドレスです",
        //   })
        // }

        // // パスワードのハッシュ化
        // const hashedPassword = await bcrypt.hash(password, 12)

        // // ユーザーの作成
        // await prisma.user.create({
        //   data: {
        //     email,
        //     name,
        //     hashedPassword,
        //   },
        // })
      } catch (error) {
        console.log(error)

        // if (error instanceof TRPCError && error.code === "BAD_REQUEST") {
        //   throw new TRPCError({
        //     code: "BAD_REQUEST",
        //     message: error.message,
        //   })
        // } else {
        //   throw new TRPCError({
        //     code: "INTERNAL_SERVER_ERROR",
        //     message: "エラーが発生しました",
        //   })
        // }
      }
    }),


})
