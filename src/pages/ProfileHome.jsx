import MainLayout from "../layout/MainLayout";
import MainHeader from "../components/organisms/MainHeader";
import ButtonBlock from "../components/atoms/ButtonBlock";

export default function ProfileHome() {

    return (
        <>
            <MainLayout
                header={
                    <MainHeader
                        title="Profile"
                        subtitle={<span>Welcome, <span className="font-bold">Paolo</span></span>}>
                    </MainHeader>
                }>
                <div className="flex flex-col gap-3 mt-8">
                    <ButtonBlock to="/profile/edit-user-data" text="Edit user data"></ButtonBlock>
                    <ButtonBlock to="/profile/edit-password" text="Edit Password"></ButtonBlock>
                    <ButtonBlock to="/profile/support" text="Support"></ButtonBlock>
                    <ButtonBlock to="/profile/FAQ" text="F.A.Q"></ButtonBlock>
                    <ButtonBlock to="/" text="Logout" bgColor="bg-primario"></ButtonBlock>
                </div>
            </MainLayout>
        </>
    )

}