import Logo from "./logo"
import NavButton from "./NavButton"
import { useWallet } from "../utils/WalletSessionProvider";
import { useContext, useEffect, useReducer, useState } from "react"
import { useRouter } from "next/router";
import { useModal } from "../utils/ModalContext";
import { CustomLogo } from "./logo";
//import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useWalletConnect } from "../utils/WalletConnectSessionProvider";
const walletConnectLogo = require('../public/walletconnect-logo.png')
import { IoWallet, IoWalletOutline } from "react-icons/io5";
import { HiOutlineGlobe, HiOutlineGlobeAlt, HiViewGrid, HiViewGridAdd, HiCreditCard, HiReceiptTax } from "react-icons/hi";
import makeBlockie from "ethereum-blockies-base64";

function NavBar(props) {
    return (
        <div className="sticky flex justify-center w-full top-0 space-x-4 flex-shrink-0 bg-background/70 backdrop-blur-xl z-30 py-4">
            <div className="flex grow max-w-[90rem] px-6 md:px-14 space-x-4">
                {props.children}
            </div>
        </div>
    )
}

export function MainNavBar({ showGetStarted }) {

    //const walletConnectSession = useWalletConnect();
    const walletSession = useWallet();
    const router = useRouter();
    const modalController = useModal();

    return (
        <NavBar>
            <Logo />
            <div className="flex grow" />
            <NavButton
                text={walletSession.isConnected ? 'Go to Dashboard' : 'Connect Wallet'}
                bgColor={'white'} textColor={'mainBlack'}
                iconRight={!walletSession.isConnected && <IoWallet size={25} className="text-green2 ml-4 -mt-1 -mr-2" />}
                onClick={async () => {
                    if (walletSession.isConnected) {
                        router.push('/dashboard')
                    } else {
                        await walletSession.showConnectModal()
                    }
                }}
            />
            {
                showGetStarted
                    ?
                    <NavButton text={'Get Started'} bgColor={'mainBlack'} textColor={'white'} shadow={'high'} link={'/getstarted'} />
                    :
                    <NavButton text={'Back'} bgColor={'mainBlack'} textColor={'white'} shadow={'high'} link={'/'} />
            }
        </NavBar>
    )
}

export function StorefrontNavBar({ storeData }) {

    const walletSession = useWallet();
    const [userBalance, setUserBalance] = useState();
    const router = useRouter();
    const modalController = useModal();

    useEffect(async () => {
        setUserBalance(100)
    }, [walletSession.address])

    return (
        <NavBar>
            <img
                src={storeData && storeData.logoURI}
                className="max-h-14 object-contain p-2 cursor-pointer"
                onClick={() => {
                    router.push('/')
                }}
            />
            <div className="flex grow" />
            <NavButton
                iconLeft={
                    walletSession.address &&
                    <div className='h-full py-2 pr-6 -ml-6'>
                        <img src={makeBlockie(walletSession.address)} className='h-full rounded-xl' />
                    </div>
                }
                text={walletSession.isConnected ? (walletSession.address.slice(0, 15) + '...') : 'Connect Wallet'}
                bgColor={'white'}
                shadow={'low'}
                textColor={walletSession.isConnected ? 'secondaryGray' : 'mainBlack'}
                iconRight={
                    !walletSession.isConnected &&
                    <div className="flex ml-4 -mt-1 -mr-2">
                        <IoWallet
                            size={25}
                            style={{ color: '#' + storeData.colourHex }}
                            className=""
                        />
                        <IoWalletOutline
                            size={25}
                            style={{ color: '#00000044' }}
                            className="absolute"
                        />
                    </div>
                }
                onClick={async () => {
                    if (!walletSession.isConnected) {
                        await walletSession.showConnectModal()
                    }
                }}
            />
            {/*<NavButton text={'Button 1'} bgColor={'white'} textColor={'mainBlack'} link={'/storefront'} /> */}
            {/*<NavButton text={'Button 2'} bgColor={'mainBlack'} textColor={'white'} shadow={'high'} link={'/storefront'} />*/}
        </NavBar>
    )
}

export function DashboardNavBar() {

    const router = useRouter();

    return (
        <NavBar>
            <Logo />
            <div className="flex grow" />
            <NavButton text={'Landing Page'} bgColor={'white'} textColor={'mainBlack'} link={'/'} />
            <NavButton text={'Get Started'} bgColor={'mainBlack'} textColor={'white'} shadow={'high'} link={'/getstarted'} />
        </NavBar>
    )
}

export function TopSpacer() {
    return (
        <div className="sticky flex flex-shrink-0 top-0 h-0 w-full pb-4" />
    )
}