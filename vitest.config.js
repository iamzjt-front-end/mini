import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		// 添加全局api，类似jest
		globals: true,
		// 在每次测试之前对所有监听(Spy)调用 .mockReset()
		restoreMocks: true,
	},
	plugins: [
		AutoImport({
			imports: ["vitest"],
			dts: true, // 生成ts声明文件
		}),
	],
});
