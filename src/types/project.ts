export type Project = {
    title: string, 
    image: string,
    description: string, 
    technologies: Array<string>
    demo?: string,
    repo: string,
    featured: boolean;
}