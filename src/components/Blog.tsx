import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn how we built a high-performance web application that handles 10k+ concurrent users",
      date: "2024-01-15",
      author: "OFBYTE Team",
      category: "Web Development",
      readTime: "5 min read",
      image: "/blog-1.jpg"
    },
    {
      title: "AI Integration in Modern Mobile Apps",
      excerpt: "Exploring how AI can enhance user experience in mobile applications",
      date: "2024-01-10",
      author: "OFBYTE Team", 
      category: "AI & Mobile",
      readTime: "7 min read",
      image: "/blog-2.jpg"
    },
    {
      title: "Game Development Trends in 2024",
      excerpt: "What's next in the gaming industry and how to stay ahead",
      date: "2024-01-05",
      author: "OFBYTE Team",
      category: "Game Development", 
      readTime: "6 min read",
      image: "/blog-3.jpg"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Insights</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="bg-gradient-accent bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and case studies from our development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/50 bg-card/50 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                <span className="text-4xl opacity-50">📝</span>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-accent/20">
                  <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all cursor-pointer">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more insights and case studies?</p>
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            Blog coming soon! 🚀
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Blog;