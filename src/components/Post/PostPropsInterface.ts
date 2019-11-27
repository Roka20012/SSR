export default interface PostProps {
	post: {
		id?: string;
		title: string;
		body: string;
	};
	deletePost(id: string): void;
	showOpenButton: boolean;
	loaded: boolean;
}
