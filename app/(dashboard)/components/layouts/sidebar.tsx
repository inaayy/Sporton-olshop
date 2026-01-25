import Image from "next/image";

const Sidebar = () => {
    return <aside className="w-80 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
        <div className="py-8 px-14 border-b border-gray-100">
            <Image src="/images/logo.svg" alt="logo admin" width={215} height={36} />
        </div>
    </aside>;
};

export default Sidebar;