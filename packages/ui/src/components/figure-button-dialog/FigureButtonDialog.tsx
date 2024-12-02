import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Image,
  type ImageProps,
} from "@/components";

export type FigureButtonDialogProps = {
  caption?: string;
} & ImageProps;

const FigureButtonDialog = ({
  alt,
  caption,
  title,
  ...props
}: FigureButtonDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Image alt={alt} title={title} {...props} />
      </DialogTrigger>
      <DialogContent>
        {title || alt
          ? (
            <DialogHeader>
              <DialogTitle>
                {title ?? alt}
              </DialogTitle>
              <DialogDescription>
                {caption}
              </DialogDescription>
            </DialogHeader>
          )
          : null}
        <Image {...props} />
      </DialogContent>
    </Dialog>
  );
};

export default FigureButtonDialog;
