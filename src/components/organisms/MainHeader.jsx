import ProfileImage from "../atoms/ProfileImage";

export default function MainHeader({ title, subtitle, name }) {

    return (
        <header className="flex justify-between">
            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-secondario text-xl">{subtitle}<span className="font-bold">{name}</span></p>
            </div>
            <ProfileImage />
        </header>
    )

}