type UserOne = {
    name: string,
    displayName: string | null,
}

function assertDisplayName(user: UserOne): asserts user is UserOne & {displayName: string}{
    if(!user.displayName) throw new Error('User has no display name')
}

function logUserByDisplayNmae(user: UserOne) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase())
}