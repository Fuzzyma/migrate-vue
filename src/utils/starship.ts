export interface Link {
  type: "link";
  label: string;
  href: string;
  isCurrent: boolean;
  badge: Badge | undefined;
  attrs: LinkHTMLAttributes;
}

interface Group {
  type: "group";
  label: string;
  entries: (Link | Group)[];
  collapsed: boolean;
  badge: Badge | undefined;
}

export type SidebarEntry = Link | Group;

/** Generates a deterministic string based on the content of the passed sidebar. */
export function getSidebarHash(sidebar: SidebarEntry[]): string {
  let hash = 0;
  const sidebarIdentity = recursivelyBuildSidebarIdentity(sidebar);
  for (let i = 0; i < sidebarIdentity.length; i++) {
    const char = sidebarIdentity.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return (hash >>> 0).toString(36).padStart(7, "0");
}

/** Recurses through a sidebar tree to generate a string concatenating labels and link hrefs. */
function recursivelyBuildSidebarIdentity(sidebar: SidebarEntry[]): string {
  return sidebar
    .flatMap((entry) =>
      entry.type === "group"
        ? entry.label + recursivelyBuildSidebarIdentity(entry.entries)
        : entry.label + entry.href,
    )
    .join("");
}

/** Turn the nested tree structure of a sidebar into a flat list of all the links. */
export function flattenSidebar(sidebar: SidebarEntry[]): Link[] {
  return sidebar.flatMap((entry) =>
    entry.type === "group" ? flattenSidebar(entry.entries) : entry,
  );
}
