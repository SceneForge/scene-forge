import {
  Button,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  type FieldValues,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  useForm,
} from "@sceneforge/ui";
import { useCallback } from "react";

import { useSceneTab } from "../../hooks";

const RenameSceneForm = () => {
  const {
    changeSceneName,
    scene,
    setRenameDialogOpen,
  } = useSceneTab();

  const form = useForm<FieldValues>({
    defaultValues: {
      "scene-name": scene?.name ?? "",
    },
    mode: "onChange",
    resetOptions: {
      keepDefaultValues: true,
    },
  });

  const handleRenameAction = useCallback((formData: FormData) => {
    const name = formData.get("scene-name");
    if (name && changeSceneName) {
      void changeSceneName(name as string);
    }
    setRenameDialogOpen(false);
  }, [changeSceneName, setRenameDialogOpen]);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Rename Scene</DialogTitle>
        <DialogDescription>
          Enter a new name for the scene.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          action={handleRenameAction}
          id="rename-scene"
        >
          <FormField
            control={form.control}
            name="scene-name"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Scene name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter scene name" {...field} />
                  </FormControl>
                </FormItem>
              </>
            )}
          />
        </form>
      </Form>
      <DialogFooter>
        <Button onClick={() => setRenameDialogOpen(false)} type="button">Cancel</Button>
        <Button form="rename-scene" type="submit">Rename</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default RenameSceneForm;
