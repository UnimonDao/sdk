use anchor_lang::prelude::*;

declare_id!("UniMon111111111111111111111111111111111111");

#[program]
pub mod unimon {
    use super::*;

    pub fn buy_farm(ctx: Context<BuyFarm>) -> Result<()> {
        let farm = &mut ctx.accounts.farm;
        farm.owner = *ctx.accounts.user.key;
        farm.level = 1;
        Ok(())
    }
}

#[account]
pub struct Farm {
    pub owner: Pubkey,
    pub level: u8,
}

#[derive(Accounts)]
pub struct BuyFarm<'info> {
    #[account(init, payer = user, space = 8 + 32 + 1)]
    pub farm: Account<'info, Farm>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}
