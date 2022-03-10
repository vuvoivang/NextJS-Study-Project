import Link from 'next/link';
import React, { Fragment, useState, useEffect, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";

import {
    Badge,
    Fab,
    Stack,
    useScrollTrigger,
    Zoom,
} from "@mui/material";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Modal from "@mui/material/Modal";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import avatar from "../public/images/VoHoangVu.jpg";
import Box from "@mui/material/Box";
import AppContext from "../context/index";

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 999 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
const style = {
    position: "absolute",
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "white",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    p: 3,
};

const Nav = (props) => {
    const IS_SERVER = typeof window === "undefined";
    const context = useContext(AppContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenModalLogout = (name) => {
        if (name === "Sign out") {
            handleCloseUserMenu();
            setOpenModalLogout(true);
        }
    };
    const [openModalLogout, setOpenModalLogout] = useState(false);
    const handleCloseModalLogout = () => setOpenModalLogout(false);
    const router = useRouter();

    const handleLogout = () => {
        handleCloseModalLogout();

        context.dispatch({
            type: "LOGOUT"
        })
        // router.replace("/");
    };

    const ModalLogout = () => {
        return (
            <Modal
                open={openModalLogout}
                onClose={handleCloseModalLogout}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>
                    <HelpOutlinedIcon
                        sx={{
                            color: "#979797",
                            fontSize: 100,
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    />
                    <Typography
                        id="modal-modal-description"
                        sx={{
                            my: 2,
                            textAlign: "center",
                            fontSize: "25px",
                            fontWeight: "bold",
                        }}
                    >
                        Are you sure to log out?
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        <Button
                            variant="contained"
                            size="large"
                            color="error"
                            onClick={handleCloseModalLogout}
                        >
                            Cancel
                        </Button>

                        <Button variant="contained" size="large" onClick={handleLogout}>
                            Log out
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        );
    };
    const pages = [
        {
            name: "Home",
            route: `/`,
        },
        {
            name: "Products",
            route: `/products`,
        },
        {
            name: "About",
            route: `/about`,
        },


    ];
    const settings = ["Sign out"];
    const avatar = "/public/images/avatar_default.png";

    if (!IS_SERVER && localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"));
        avatar = user.avatar;
    }
    return (
        <Fragment>
            <AppBar
                className="navbar"
                position="static"
                sx={{ background: "white", position: "sticky", top: 0, opacity: 0.9 }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        >
                            <Link href="/" className="logo">
                                <img
                                    src="/images/logo.png"
                                    alt="My Logo"
                                    style={{ borderRadius: "50%", cursor: "pointer" }}
                                />
                            </Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="medium"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                style={{ color: "white" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                    width: "100%",
                                }}
                            >
                                {pages.map((page, index) => (
                                    <Link
                                        key={index}
                                        className="nav-page-link-mobile"
                                        exact
                                        href={page.route}
                                        activeStyle={{ color: "red" }}
                                    >
                                        <MenuItem>
                                            <span style={{ margin: "0 auto" }}>{page.name}</span>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                        >
                            <Link href="/" className="logo">
                                <img
                                    src='/images/logo.png'
                                    alt="My Logo"
                                    width="40px"
                                    style={{ borderRadius: "50%" }}
                                />
                            </Link>
                        </Typography>
                        <Box
                            className="nav-page"
                            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                        >
                            {pages.map((page, index) => (
                                <Button key={index} className="nav-page-item">
                                    <Link

                                        href={page.route}
                                        className="nav-link"
                                        activeClassName="nav-link-active"
                                    >
                                        {page.name}
                                    </Link>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {typeof window !== 'undefined' ? localStorage.getItem("token") ? <Fragment>
                                <IconButton
                                    className="notification"
                                    size="medium"
                                // aria-label="show 17 new notifications"
                                >
                                    <Badge badgeContent={0} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>

                                <Tooltip title="Tùy chọn">
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0, color: "black" }}
                                    >
                                        <Avatar
                                            style={{ width: "48px", height: "48px" }}
                                            alt="avatar"
                                            src={avatar}
                                        />
                                    </IconButton>
                                </Tooltip>

                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            key={setting}
                                            onClick={() => handleOpenModalLogout(setting)}
                                        >
                                            <Typography style={{ padding: "5px 20px" }} textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Fragment> : <button onClick={() => {
                                router.push("/login");
                            }} className="btn btn-login">Login</button> : null}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Toolbar style={{ minHeight: 0 }} id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            {ModalLogout()}
        </Fragment>
    );


}

export default Nav