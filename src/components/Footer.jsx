import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";

export default function Footer() {
  return (
    <div className="mt-20 border-t py-8 flex justify-center border-neutral-700 gap-5">
      <div className="w-1/3">
        <h3 className="text-md font-semibold mb-4">Resources</h3>

        {resourcesLinks.map((resource, index) => (
          <div key={index} className="sm:my-2 my-1">
            <a href={resource.href} className="sm:text-sm text-xs">
              {resource.text}
            </a>
          </div>
        ))}
      </div>

      <div className="w-1/3">
        <h3 className="text-md font-semibold mb-4">Platform</h3>
        {platformLinks.map((platform, index) => (
          <div key={index} className="sm:my-2 my-1">
            <a href={platform.href} className="sm:text-sm text-xs">
              {platform.text}
            </a>
          </div>
        ))}
      </div>

      <div className="w-1/3">
        <h3 className="text-md font-semibold mb-4">Community</h3>
        {communityLinks.map((community, index) => (
          <div key={index} className="sm:my-2 my-1">
            <a href={community.href} className="sm:text-sm text-xs">
              {community.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
