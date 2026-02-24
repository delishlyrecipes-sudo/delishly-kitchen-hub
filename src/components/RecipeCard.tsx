import { Link } from "react-router-dom";
import { Clock, Star } from "lucide-react";
import type { Recipe } from "@/data/recipes";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <Link
    to={`/recipes/${recipe.slug}`}
    className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={recipe.featuredImage}
        alt={recipe.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
        {recipe.category}
      </span>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {recipe.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {recipe.shortDescription}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {recipe.totalTime} min
        </span>
        <span className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-primary text-primary" />
          {recipe.rating}
        </span>
      </div>
    </div>
  </Link>
);

export default RecipeCard;
