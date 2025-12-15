import type { PostId } from '@/config/blogPosts/_registry';
import { ProjectId } from '@/config/projectsContent/_reigistry';

export const href = {
	blogPost(id: PostId) {
		return `/blog/${id}` as const;
	},
	project(id: ProjectId) {
		return `/portfolio/${id}` as const;
	},
} as const;