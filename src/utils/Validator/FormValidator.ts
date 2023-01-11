import { Links } from "../../types";

export const LinksValidator = (links: Links[]): string[] => {
  const validatorError: string[] = [];
  const regex = new RegExp(
    "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
  );

  links.forEach(({ link, title }) => {
    if (link !== "") {
      if (!regex.test(link)) {
        validatorError.push("Link must be a url address entered url: " + link);
        validatorError.push(title);
      }
    }
  });

  return validatorError;
};
