import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}


export default function HeroFlats({}: Props) {
  return (
 
    <div class="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">Planeje seu futuro financeiro</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">Simule diferentes tipos de investimentos e descubra a melhor estratégia para alcançar seus objetivos financeiros.</p>
        </div>
    </div>
  );
}
